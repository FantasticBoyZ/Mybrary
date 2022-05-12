const rootStyles = window.getComputedStyle(document.documentElement)

if(rootStyles.getPropertyValue('--book-cover-width-large') != null && 
rootStyles.getPropertyValue('--book-cover-width-large') != '') {
  ready()
}else {
  document.getElementById('main-css').addEventListener('load', ready)
}

function ready(){
  const coverWidth = parseFloat(
    rootStyles.getPropertyValue
    ('--book-cover-width-large'))
  const coveAspectRatio = parseFloat(
    rootStyles.getPropertyValue
    ('--book-cover-aspect-ratio'))
  const coverHeight = coverWidth / coveAspectRatio
  FilePond.registerPlugin(
    FilePondPluginImagePreview,
    FilePondPluginImageResize,
    FilePondPluginFileEncode,
  )
  
  FilePond.setOptions({
    stylePanelAspectRatio: 1 / coveAspectRatio,
    imageResizeTargetWidth: coverWidth,
    imageResizeTargetHeight: coverHeight,
  })
  FilePond.parse(document.body);
}