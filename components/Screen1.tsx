import { FairyIcon } from './../utils/icons';
import { ConnectButton } from '@rainbow-me/rainbowkit';

export function Screen1() {
    return (
        <div className="flex flex-row justify-center">
            <div className="md:w-64">{FairyIcon}</div>
            <div className="flex flex-col w-full md:w-2/5 mx-auto">
                <div className="font-bitter font-semibold text-md md:text-3xl">
                    On-chain raffles made{' '}
                    <span className="text-primary">fair</span>
                </div>
                <div className="text-sm md:text-xl">
                    Connect your web3 wallet and create a fully on-chain raffle
                    for your upcoming NFT project mint allowlist.
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
    );
}
