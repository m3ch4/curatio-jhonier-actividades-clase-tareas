export async function getDocumentTypes() {
    // Con fetch: el archivo debe estar en public/data/selects/documentTypes.json
    const response = await fetch("/data/selects/documentTypes.json");
    return response.json();
}