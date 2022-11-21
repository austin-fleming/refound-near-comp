# Tutorial

https://docs.near.org/tutorials/nfts/series#new-contract-file-structure

# Build and Deploy the contract

```bash
./build.sh
```

and

```bash
./deploy.sh
```

# Create NFT contract metadata

```bash
near call $NFT_CONTRACT_ID new_default_meta '{"owner_id": "'$NFT_CONTRACT_ID'"}' --accountId $NFT_CONTRACT_ID
```

# Creating Basic Series

```bash
near call $NFT_CONTRACT_ID create_series '{"id": 1, "metadata": {"title": "SERIES!", "description": "testing out the new series contract", "media": "https://bafybeiftczwrtyr3k7a2k4vutd3amkwsmaqyhrdzlhvpt33dyjivufqusq.ipfs.dweb.link/goteam-gif.gif"}}' --accountId $NFT_CONTRACT_ID --amount 1
```

# Get Series

```bash
near view $NFT_CONTRACT_ID get_series
```

# Change Series Verification

```bash
near call $NFT_CONTRACT_ID change_series_verification '{"id": 1, "verified": true}' --accountId $NFT_CONTRACT_ID
```
