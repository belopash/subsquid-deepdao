import { ProcessorConfig } from './common/processorConfig'

export default {
    chainName: 'acala',
    prefix: 'acala',
    dataSource: {
        archive: 'https://acala.indexer.gc.subsquid.io/v4/graphql',
        chain: 'wss://acala-polkadot.api.onfinality.io/public-ws',
    },
    typesBundle: 'acala',
    batchSize: 500,
    blockRange: {
        from: 0,
    },
} as ProcessorConfig
