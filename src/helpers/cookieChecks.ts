export function checkInitialData() {

    if (document.cookie.split(';').some((item) => item.trim().startsWith('initData=true'))) {
        return true
      } else {
         return false 
      }
      
}
