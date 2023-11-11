import {
  isReady,
  shutdown,
  Mina,
  PrivateKey,
  PublicKey,
  AccountUpdate,
  UInt32
} from 'o1js';

import { Example } from './Example';

describe('Example tests', () => {
  beforeAll(async () => {
    await isReady;
    await Example.compile();
  });

  afterAll(async () => {
    setTimeout(shutdown, 0);
  });

  it.only('simple Example test', async () => {
    const zkAppPrivateKey: PrivateKey = PrivateKey.random();
    const zkAppAddress: PublicKey = zkAppPrivateKey.toPublicKey();

    const local = Mina.LocalBlockchain();
    Mina.setActiveInstance(local);
    local.setBlockchainLength(UInt32.from(0));

    const deployerAccount: PrivateKey = local.testAccounts[0].privateKey;
    const employer_sk: PrivateKey = local.testAccounts[1].privateKey;
    const employer_pk: PublicKey = employer_sk.toPublicKey();

    const zkAppInstance = new Example(zkAppAddress);

    // deploy
    const deployer_pk: PublicKey = deployerAccount.toPublicKey();
    const tx_deploy = await Mina.transaction(deployer_pk, () => {
      AccountUpdate.fundNewAccount(deployer_pk);
      zkAppInstance.deploy({ zkappKey: zkAppPrivateKey });
    });
    await tx_deploy.prove();
    await tx_deploy.sign([zkAppPrivateKey, deployerAccount]);
    await tx_deploy.send();

    // run method
    const tx = await Mina.transaction(employer_pk, () => {
      zkAppInstance.simpledeposit(employer_pk);
    });
    await tx.prove();
    await tx.sign([employer_sk]);
    await tx.send();
  });
});
