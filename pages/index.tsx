import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useConnect } from 'wagmi';
import { FairyIcon } from './../utils/icons';

const Home: NextPage = () => {
    const { data } = useAccount();
    const { isConnected } = useConnect();

    const DisplayNameComp = () => {
        if (isConnected && data) {
            return <div>Your address is: {data.address}</div>;
        } else {
            return <></>;
        }
    };

    return (
        <div className="flex flex-col h-screen">
            <Head>
                <title>Fairymint</title>
                <meta name="description" content="Fairymint website" />
                <link rel="icon" href="/favicon/favicon.ico" />
            </Head>
            <header className="p-4 flex flex-row justify-between">
                <div className="flex flex-row">
                    <div className="w-12">{FairyIcon}</div>
                    <div className="ml-2">
                        <div className="font-bitter font-bold">Fairymint</div>
                        <div className="text-md">on-chain raffles</div>
                    </div>
                </div>
                <div>
                    <ConnectButton
                    // chainStatus="none"
                    // showBalance={false}
                    // accountStatus="address"
                    />
                </div>
            </header>
            <main className="flex-grow p-4 w-3/5 mx-auto">
                <div className="flex flex-row justify-center">
                    <div className="w-64">{FairyIcon}</div>
                    <div className="flex flex-col w-2/5 mx-auto">
                        <div className="font-bitter font-semibold text-3xl">
                            On-chain raffles made{' '}
                            <span className="text-primary">fair</span>
                        </div>
                        <div className="font-xl">
                            Connect your web3 wallet and create a fully on-chain
                            raffle for your upcoming NFT project mint allowlist.
                        </div>
                        <div className="mt-8 flex flex-row justify-center">
                            <div>
                                <ConnectButton label="Create raffle" />
                                <div className="font-light text-gray-500 font-opensans text-xs mt-2">
                                    first 100 raffles for free
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            {/* <footer className="p-4 ">Footer</footer> */}
        </div>
    );
};

export default Home;
