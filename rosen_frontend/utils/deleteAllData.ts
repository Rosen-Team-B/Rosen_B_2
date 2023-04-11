export const deleteAllData = async () => {
    const apiUrl = "http://127.0.0.1:8000/videoUpload/admin/wipe_db/"
    try{
        const response =  await fetch(apiUrl, {method: 'DELETE'})
        if(response.ok)
            return true
        throw new Error('Failed to delete object');
    }catch (err){
        console.error("Error occurred while deleting objects in the database.", err)
        return false
    }
}