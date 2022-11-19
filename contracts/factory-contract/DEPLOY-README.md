## 1. Deploy the Donations Contract Into a Sub-Account

`create_factory_subaccount_and_deploy_donations` will create a sub-account of the factory and deploy the
stored contract on it.

```bash
near call <factory-account> create_factory_subaccount_and_deploy_donations '{ "name": "donations", "beneficiary": "<account-to-be-beneficiary>"}' --deposit 1.24 --accountId <account-id> --gas 300000000000000
```

This will create the `sub.<factory-account>`, which will have a `donation` contract deployed on it:

```bash
near view sub.<factory-account> get_beneficiary
# expected response is: <account-to-be-beneficiary>
```

## 2. Deploy the Crowdfunding Contract Into a Sub-Account

`create_factory_subaccount_and_crowdfunding_deploy` will create a sub-account of the factory and deploy the
stored contract on it.

```bash
near call <factory-account> create_factory_subaccount_and_deploy_crowdfunding '{ "name": "crowdfunding", "owner": "<account-to-be-owner>"}' --deposit 1.24 --accountId <account-id> --gas 300000000000000
```

## 3. Deploy the Lockup Contract Into a Sub-Account

## 4. Deploy the Multisig Contract Into a Sub-Account

## 5. Deploy the Voting Contract Into a Sub-Account

## 6. Deploy the Whitelist Contract Into a Sub-Account

<br>

---

<br>
