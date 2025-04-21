function PostContent({text, image, onImageUpload}){
    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]){
            const file = e.target.files[0];

            const reader = new FileReader();
            reader.onload = (event) => {
                const imageUrl = event.target.result;
                onImageUpload(imageUrl);
            };
            reader.readAsDataURL(file);
        }
    }

    return(
        <div className="post-content">
            <p className="post-text">{text}</p>
            {image && (
                <div className="post-image-container">
                    <img src={image} alt="Contenido del post" className="post-image" />
                </div>
            )}

            <div className="image-upload">
                <label htmlFor="file-input" className="upload-button">
                    Subir imagen
                </label>
                <input 
                    id="file-input"
                    type="file"
                    accept="image/*"
                    style={{display: 'none'}}
                    onChange={handleFileChange}
                />
            </div>
        </div>
    );
}

export default PostContent;