export function Screen2() {
    return (
        <div className="flex flex-col md:w-3/5 mx-auto">
            <div className="text-4xl font-semibold font-bitter">New raffle</div>

            <div className="mt-4">
                <div className="font-light">
                    What is the name of the raffle?
                </div>
                <input
                    className="bg-gray-100 text-gray-700 p-2 w-3/5 rounded-md"
                    type="text"
                    placeholder="The fairest raffle ever..."
                />
                <div className="mt-2"># of whitelist spots?</div>
                <input
                    className="bg-gray-100 text-gray-700 p-2 w-3/12 rounded-md"
                    type="text"
                    placeholder="420"
                />
            </div>
            <div className="mt-4">
                <button className="bg-primary text-white text-xl font-bitter font-semibold rounded-md p-2">
                    Upload list of users
                </button>
            </div>

            <div className="mt-16">
                <button className="bg-blue-700 text-white text-xl font-bitter font-semibold rounded-md p-2">
                    Create raffle
                </button>
            </div>
        </div>
    );
}
