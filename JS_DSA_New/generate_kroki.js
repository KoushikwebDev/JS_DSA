const zlib = require('zlib');
const fs = require('fs');
const https = require('https');

const diagram = fs.readFileSync('fib_diagram.mmd', 'utf8');

zlib.deflate(diagram, (err, buffer) => {
    if (err) {
        console.error('Error compressing diagram:', err);
        return;
    }
    const payload = buffer.toString('base64').replace(/\+/g, '-').replace(/\//g, '_');
    
    const url = `https://kroki.io/mermaid/png/${payload}`;
    
    const file = fs.createWriteStream('fibonacci_flow.png');
    https.get(url, (response) => {
        if (response.statusCode !== 200) {
            console.error(`Failed to fetch image. Status Code: ${response.statusCode}`);
            return;
        }
        response.pipe(file);
        file.on('finish', () => {
            file.close();
            console.log('Successfully generated fibonacci_flow.png');
        });
    }).on('error', (err) => {
        console.error('Error downloading image:', err);
        fs.unlink('fibonacci_flow.png', () => {});
    });
});
