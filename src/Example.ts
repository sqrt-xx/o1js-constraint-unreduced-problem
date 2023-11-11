import {
  SmartContract,
  method,
  DeployArgs,
  Permissions,
  PublicKey,
  UInt64,
  AccountUpdate,
} from 'o1js';

export class Example extends SmartContract {
  deploy(args: DeployArgs) {
    super.deploy(args);
    this.setPermissions({
      ...Permissions.default(),
      editState: Permissions.proof(),
      send: Permissions.proof(),
    });
  }

  @method simpledeposit(user: PublicKey) {
    const payerUpdate = AccountUpdate.createSigned(user);
    payerUpdate.send({ to: this.address, amount: UInt64.from(1000000) });
  }
}
