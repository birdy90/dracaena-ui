import DuiContainer from "../components/layout/DuiContainer";

const Basics = () => {
    const colorsData = [
        {title: 'Stone gray', colors: [
                'text-stone-200 bg-stone-800', 'text-stone-200 bg-stone-600',
                'text-stone-200 bg-stone-400', 'bg-stone-200', 'bg-stone-100',
            ]},
        {title: 'Emerald', colors: ['bg-emerald-200', 'bg-emerald-300', 'bg-emerald-500'] },
        {title: 'Amber', colors: ['bg-amber-200', 'bg-amber-300', 'bg-amber-500'] },
        {title: 'Red', colors: ['bg-red-200', 'bg-red-300', 'bg-red-500'] },
    ];


    return (
        <DuiContainer centered className="flex flex-col gap-2">
            <div>
                <h2>1. Colors</h2>

                <div className="flex flex-wrap gap-8">
                    {colorsData.map(group => (
                        <div
                            className="flex flex-col gap-2" key={group.title}
                        >
                            <h5>{ group.title }</h5>
                            <div className="flex gap-4">
                                {group.colors.map(t => (
                                    <div
                                        className={`
                                            flex items-center justify-center
                                            w-12 h-8 rounded-xl ${t}
                                        `}
                                        key={t}
                                    >
                                        { t.split('-').pop() }
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h2>2. Typography</h2>

                <div className="grid grid-cols-4 text-center">
                    <div>
                        <h1>H1 title</h1>
                        <h2>H2 title</h2>
                        <h3>H3 title</h3>
                        <h4>H4 title</h4>
                        <h5>H5 title</h5>
                        <p>Just paragraph</p>
                        <p><b>Bold paragraph</b></p>
                        <p><i>Italic paragraph</i></p>
                        <p><code>Monospace one</code></p>
                    </div>
                    <div className="text-emerald-500">
                        <h1>H1 title</h1>
                        <h2>H2 title</h2>
                        <h3>H3 title</h3>
                        <h4>H4 title</h4>
                        <h5>H5 title</h5>
                        <p>Just paragraph</p>
                        <p><b>Bold paragraph</b></p>
                        <p><i>Italic paragraph</i></p>
                        <p><code>Monospace one</code></p>
                    </div>
                    <div className="text-amber-500">
                        <h1>H1 title</h1>
                        <h2>H2 title</h2>
                        <h3>H3 title</h3>
                        <h4>H4 title</h4>
                        <h5>H5 title</h5>
                        <p>Just paragraph</p>
                        <p><b>Bold paragraph</b></p>
                        <p><i>Italic paragraph</i></p>
                        <p><code>Monospace one</code></p>
                    </div>
                    <div className="text-red-500">
                        <h1>H1 title</h1>
                        <h2>H2 title</h2>
                        <h3>H3 title</h3>
                        <h4>H4 title</h4>
                        <h5>H5 title</h5>
                        <p>Just paragraph</p>
                        <p><b>Bold paragraph</b></p>
                        <p><i>Italic paragraph</i></p>
                        <p><code>Monospace one</code></p>
                    </div>
                </div>
            </div>

            <div>
                <h2>3. Spaces</h2>
            </div>
        </DuiContainer>
    );
};

export default Basics;
