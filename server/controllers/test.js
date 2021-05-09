const test = async (req, res) => {
    const all = [1, 2, 3, 4, 5];
    res.status(200).send(all);
}

export {
    test
}