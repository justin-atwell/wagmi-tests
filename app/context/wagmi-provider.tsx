'use client'

import React, {ReactNode} from "react"
import { wagmiConfig, projectId } from "@/lib/config";
import { createWeb3Modal } from "@web3modal/wagmi/react";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {State, WagmiProvider} from 'wagmi';

const query = new QueryClient();

if (!projectId) throw new Error("no projectId");

createWeb3Modal({
    wagmiConfig,
    projectId
});

export function Web3Provider({children, initialState}: {children: ReactNode; initialState?: State}){
    return (
        <WagmiProvider config={wagmiConfig} initialState={initialState}>
          <QueryClientProvider client={query}>{children}</QueryClientProvider>
        </WagmiProvider>
      );
}