import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

function GetImports(){
  const dirPath = path.dirname(__dirname)

    return (
      (dirPath.startsWith("C") ? "./src/Styles/Variables.scss" : path.resolve(__dirname, "src","Styles","Variables.scss") )
    )
}
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "${GetImports()}";`
      }
    }
  }
})
