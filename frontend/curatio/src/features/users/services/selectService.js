export async function getDocumentTypes() {
    // Con fetch: el archivo debe estar en public/data/selects/documentTypes.json
    const response = await fetch("/data/selects/documentTypes.json");
    return response.json();
}

export async function getRoles() {
    // Con fetch: el archivo debe estar en public/data/selects/roles.json
    const response = await fetch("/data/selects/roles.json");
    return response.json();
}