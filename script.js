function saveFormData(formid){
    const form = document.getElementById(formid)
    const formData = new FormData(form)
    const formDataObj = {}
    formData.forEach((value,key)=>{
        formDataObj[key] = value
    })
    sessionStorage.setItem(formid,JSON.stringify(formDataObj))
    
}

function getAllFormData(){
    const allData = {}
    const formids = ['form1','form2']
    formids.forEach(formid=>{
        const savedData = sessionStorage.getItem(formid)
        if(savedData){
            Object.assign(allData,JSON.parse(savedData))
        }
    })
    return allData

}

function saveAndNext(formid,nextPage){
    saveFormData(formid)
    window.location.href = nextPage
}