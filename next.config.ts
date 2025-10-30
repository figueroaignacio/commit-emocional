import { withPayload } from '@payloadcms/next/withPayload';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  turbopack: {
    resolveAlias: {},
    resolveExtensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
  },
};

export default withPayload(nextConfig, { devBundleServerPackages: false });
