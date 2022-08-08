const GOOGLE_API_KAY = 'AIzaSyA1JvyRNax0rilfidE4xBfAPwOASYNSHDg';

export const getMapPreview = (letitude, longitude) => {
    const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${letitude},${longitude}&zoom=18&size=400x300&maptype=roadmap&markers=color:red%7Clabel:S%7C${letitude},${longitude}&key=${GOOGLE_API_KAY}`
    return imagePreviewUrl
}