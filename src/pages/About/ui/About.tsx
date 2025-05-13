
const About = () => {
    return (
        <div className="container">
            <div className="section">
                <h2 className="title">About</h2>
                <div className="flex p-4 shadow rounded-2xl flex-col gap-4 items-center border-black border border-solid">
                    <p className="font-sans text-sm sm:text-lg md:text-xl text-center">
                        В этом приложении показны возможно кэшировать данные с помощью redux toolkit. Конечно, если данные быстро меняются или их слишком много кэшиование стоит не делать. Если же мы будем исользовать Next.js кэшировать данные с сервера можно прям в fetch запросе, и не нужно их нигде сохранять в приложении.
                        Также тут используется lazy загрузка страниц.
            
                    </p>
                    <p className="font-sans text-sm sm:text-lg md:text-xl text-center">      
                        Используются : React, Ts, ReduxToolkit, React touter dom   
                    </p>
                </div>
                <button className="border-blue-500 bg-blue-500 p-2 md:p-4 border-2 rounded-lg">
                    <p className="text-sm sm:text-lg md:text-xl font-bold text-white">Go to repository</p>
                </button>
            </div>
        </div>
    );
};

export default About;