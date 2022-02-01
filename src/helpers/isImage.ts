export function isImage(url: string) {

        if(!url) return false

        if (url.startsWith('https://') || url.startsWith('http://')) {
                return true
        } else {
                return false
        }
}

