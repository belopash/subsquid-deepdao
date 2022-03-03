import { ProcessorConfig } from './common/processorBase'

export default {
    chainName: 'kusama',
    dataSource: {
        archive: 'https://polkadot.indexer.gc.subsquid.io/v4/graphql',
        chain: 'wss://rpc.polkadot.io',
    },
    typesBundle: 'kusama',
    batchSize: 250,
} as ProcessorConfig
