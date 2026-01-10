function Pass({ name = "Unkown", color = "green", marks }) {

    // if (marks === undefined) {
    //     return <h1>Marks are not uploaded yet!</h1>;
    // }

    return (
        <div>
            {marks === undefined ? (
                <h1>Makrs are not uploaded yet!</h1>
            ) : (
                <div>
                    <h1 style={{ color }}>Pass!</h1>
                    <p>
                        Mr/Mrs {name} your marks are {marks}
                    </p>
                </div>
            )}
        </div>
    );
}

export default Pass;
