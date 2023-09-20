const fs = require("fs");

module.exports = (errorMessage, error) => {
    const date = new Date();

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const fullYear = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const time = `${hours}-${minutes}-${seconds}`;

    const fileStorePath = `./file_store`;
    if (!fs.existsSync(fileStorePath)) {
        fs.mkdirSync(fileStorePath);
    }

    const bugTrackingPath = `./file_store/bug_tracking`;
    if (!fs.existsSync(bugTrackingPath)) {
        fs.mkdirSync(bugTrackingPath);
    }

    const completePath = `./file_store/bug_tracking/${fullYear}-${month}-${day}`;

    if (!fs.existsSync(completePath)) {
        fs.mkdirSync(completePath);
    }

    const errorFilePath = `${completePath}/${time}.json`;

    let errorString = "";
    if (error instanceof Error) {
        errorString = error.message;
    }

    fs.writeFileSync(
        errorFilePath,
        JSON.stringify({ ...errorMessage, errorString: errorString })
    );
};
