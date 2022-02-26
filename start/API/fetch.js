fetch('coffee.jpg')
    .then(response => response.blob())
    .then(myBlob => {
        let objectURL = URL.createObjectURL(myBlob);
        let image = document.createElement('img');
        image.src = objectURL;
        document.body.appendChild(image);
    })
    .catch(e => {
        console.log('There has been a problem with your fetch operation: ' + e.message);
    });
