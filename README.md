# Mina zkApp: Constraint Unreduced

I basically encountered following problem with `o1js`

```
    Constraint unsatisfied (unreduced):

    rule_main
    step_main

    Constraint:
    ((basic(Equal(Var 8898)(Constant 0)))(annotation()))
    Data:
    Equal 7808355410160486162236558740233299497946944049897013700262020732398967569838 0

      at failwith (ocaml/ocaml/stdlib.ml:29:14)
      at ../../../../../../home/gregor/.opam/4.14.0/lib/base/printf.ml:6:43
      at ../../../../../../workspace_root/src/lib/snarky/src/base/checked_runner.ml:216:13
      at assert$0 (src/lib/snarky/src/base/snark0.ml:1185:32)
      at assert_equal$0 (src/lib/snarkyjs/src/bindings/ocaml/lib/snarky_bindings.ml:74:39)
      at Field.assertEquals (o1js/src/lib/field.ts:276:20)
      at Object.hashChildren (o1js/src/lib/account_update.ts:1576:13)
      at Object.hashChildrenBase (o1js/src/lib/account_update.ts:1584:30)
      at Object.hashChildren (o1js/src/lib/account_update.ts:1574:28)
      at AccountUpdate.toPublicInput (o1js/src/lib/account_update.ts:1095:28)
      at checkPublicInput (o1js/src/lib/zkapp.ts:497:25)
      at Example.wrappedMethod (o1js/src/lib/zkapp.ts:271:13)
      at node_modules/o1js/src/lib/zkapp.ts:675:38
      at main (o1js/src/lib/proof_system.ts:727:16)
      at _gAu_ (src/lib/snarkyjs/src/bindings/ocaml/lib/pickles_bindings.ml:260:41)
      at ../../../../../../workspace_root/src/lib/pickles/step_main.ml:285:15
      at with_label (src/lib/snarky/src/base/snark0.ml:1253:15)
      at with_label (src/lib/snarky/src/base/snark0.ml:1253:15)
      at ../../../../../../workspace_root/src/lib/pickles/step.ml:843:43
      at handle (src/lib/snarky/src/base/snark0.ml:1237:15)
      at _iCl_ (src/lib/pickles/step.ml:842:21)
      at mark_active (src/lib/snarky/src/base/snark0.ml:1167:19)
      at _piQ_ (src/lib/snarky/src/base/snark0.ml:1302:52)
      at as_stateful (src/lib/snarky/src/base/snark0.ml:755:15)
      at ../../../../../../workspace_root/src/lib/snarky/src/base/runners.ml:82:22
      at ../../../../../../workspace_root/src/lib/snarky/src/base/runners.ml:305:34
      at ../../../../../../workspace_root/src/lib/snarky/src/base/snark0.ml:1302:19
      at finalize_is_running (src/lib/snarky/src/base/snark0.ml:1272:15)
      at generate_witness_conv (src/lib/snarky/src/base/snark0.ml:1301:7)
      at prove (src/lib/snarkyjs/src/bindings/ocaml/lib/pickles_bindings.ml:638:7)
      at node_modules/o1js/src/lib/proof_system.ts:645:32
      at withThreadPool (o1js/src/bindings/js/node/node-backend.js:55:20)
      at prettifyStacktracePromise (o1js/src/lib/errors.ts:137:12)
      at node_modules/o1js/src/lib/account_update.ts:2055:16
      at Object.run (o1js/src/lib/proof_system.ts:981:16)
      at createZkappProof (o1js/src/lib/account_update.ts:2045:21)
      at addProof (o1js/src/lib/account_update.ts:2019:15)
      at addMissingProofs (o1js/src/lib/account_update.ts:1980:42)
      at Object.prove (o1js/src/lib/mina.ts:307:38)
      at Object.<anonymous> (src/Example.test.ts:51:5)
```

and prepared this repo as a demonstration. My environment is

```sh$ node -v
v18.16.0
```

to reproduce simply run

```sh
npm install
```

then

```sh
npm run test
```

## License

[Apache-2.0](LICENSE)
