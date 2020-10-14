/**
 * Responds to any HTTP request.
 * Entry Point is helloWorld Function
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
exports.helloWorld = (req, res) => {
    let message = req.query.keyword || req.body.keyword || null;
    message = message === null ? 'No Keyword Sent' : 'Prashant Pandey says ' + message;
    res.status(200).send(message);
};