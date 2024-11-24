const Toolbar: React.FC<{onExportSVG: () => void}> = ({onExportSVG}) => {
    return(
        <div style={{padding: '10px', borderBottom: '1px solid black'}}>
            <button onClick={onExportSVG} style={{marginRight: '10px'}}>Export to SVG</button>
        </div>
    )
}
export default Toolbar