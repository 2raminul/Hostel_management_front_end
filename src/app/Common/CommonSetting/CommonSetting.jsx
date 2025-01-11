import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { setBodyGradient, setBorderRadius, setBorderStroke, setBoxLayout, setIconColor, setMonoChrome, setThemeColor } from '../../Redux/actions/settingsActions';

const CommonSetting = ({selectedMode}) => {

	const dispatch = useDispatch();
   
    const [theme,setTheme] = useState('PurpleHeart');
	const [borderStroke, setBorderStrok] = useState('svgstroke-a');
	const [boxLayout, setBoxLayoutt] = useState('');
	const [monochrome, setMonoChrom] = useState('');
	const [borderRadius, setBorderRadiuss] = useState('');
	const [iconColor, setIconColorr] = useState('');
	const [gradientColor, setGradientColor] = useState('bg-gradient');

	const ValenciaRed = theme === 'ValenciaRed';
    const SunOrange = theme === 'SunOrange';
    const AppleGreen = theme === 'AppleGreen';
    const CeruleanBlue = theme === 'CeruleanBlue';
    const Mariner = theme === 'Mariner';
    const PurpleHeart = theme === 'PurpleHeart';
    const FrenchRose = theme === 'FrenchRose';

	useEffect(() => {
        dispatch(setThemeColor(theme));
		dispatch(setBorderStroke(borderStroke));
		dispatch(setBoxLayout(boxLayout));
		dispatch(setMonoChrome(monochrome));
		dispatch(setBorderRadius(borderRadius));
		dispatch(setIconColor(iconColor));
		dispatch(setBodyGradient(gradientColor));
		// eslint-disable-next-line react-hooks/exhaustive-deps
    }, [theme, borderStroke, boxLayout, monochrome, borderRadius, iconColor, gradientColor]);

	const handleStrockChange = (e) => {
        setBorderStrok(e.target.value);
    }

	//More App Setting
	const toggleBodyGradient = () => {
        if (gradientColor === 'bg-gradient' && selectedMode !== 'dark') {
            setGradientColor('bg-body')
        } else {
            setGradientColor('bg-gradient')
        }
    };

    const toggleBoxLayout = () => {
        if (boxLayout === '') {
            setBoxLayoutt('box-layout rightbar-hide')
        } else {
            setBoxLayoutt('')
        }
    };

    const toggleMonochrome = () => {
        if (monochrome === '') {
            setMonoChrom('monochrome')
        } else {
            setMonoChrom('')
        }
    };

    const toggleBorderRadius = () => {
        if (borderRadius === '') {
            setBorderRadiuss('radius-0')
        } else {
            setBorderRadiuss('')
        }
    };

    const toggleIconColor = () => {
        if (iconColor === '') {
            setIconColorr('icon-color')
        } else {
            setIconColorr('')
        }
    };

	const toggleCardShadow = () => {
        const elements = document.getElementsByClassName('card');
        const ele = document.getElementById('BoxShadow').checked;
    
        for (let i = 0; i < elements.length; i++) {
            if (ele) {
                elements[i].classList.add("shadow-active");
            } else {
                elements[i].classList.remove("shadow-active");
            }
        }
    };

	//Layout Section Ligh/Dark
    const toggleTheme = (elementId) => {
        const element = document.getElementById(elementId);
    
        if (element) {
            if (element.getAttribute('data-bs-theme') === 'none') {
                element.setAttribute('data-bs-theme', 'dark');
            } else {
                element.setAttribute('data-bs-theme', 'none');
            }
        }
    };

	const toggleSidebarDark = () => {
	toggleTheme('sidebarDark');
	}; 

	const toggleHeaderDark = () => {
	toggleTheme('headerDark');
	};

  return (
  	<div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvas_setting" aria-labelledby="offcanvas_setting">
		<div className="offcanvas-header">
			<h5 className="offcanvas-title">Template Setting</h5>
			<button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
		</div>
		<div className="offcanvas-body">
			<div className="mb-4">
				<h6>Set Theme Color</h6>
				<ul className="choose-skin list-unstyled mb-0">
					<li className={`${ValenciaRed ? 'active' : ''}`} onClick={() => setTheme('ValenciaRed')} data-theme="ValenciaRed"><div style={{"--hotelair-theme-color": "#D63B38"}}></div></li>
					<li className={`${SunOrange ? 'active' : ''}`} onClick={() => setTheme('SunOrange')} data-theme="SunOrange"><div style={{"--hotelair-theme-color": "#F7A614"}}></div></li>
					<li className={`${AppleGreen ? 'active' : ''}`} onClick={() => setTheme('AppleGreen')} data-theme="AppleGreen"><div style={{"--hotelair-theme-color": "#5BC43A"}}></div></li>
					<li className={`${CeruleanBlue ? 'active' : ''}`} onClick={() => setTheme('CeruleanBlue')} data-theme="CeruleanBlue"><div style={{"--hotelair-theme-color": "#00B8D6"}}></div></li>
					<li className={`${Mariner ? 'active' : ''}`} onClick={() => setTheme('Mariner')} data-theme="Mariner"><div style={{"--hotelair-theme-color": "#0066FE"}}></div></li>
					<li className={`${PurpleHeart ? 'active' : ''}`} onClick={() => setTheme('PurpleHeart')} data-theme="PurpleHeart"><div style={{"--hotelair-theme-color": "#6238B3"}}></div></li>
					<li className={`${FrenchRose ? 'active' : ''}`} onClick={() => setTheme('FrenchRose')} data-theme="FrenchRose"><div style={{"--hotelair-theme-color": "#EB5393"}}></div></li>
				</ul>
			</div>
			<div className="svg-stroke mb-4">
				<h6>Icon Border Stroke</h6>
				<div className="btn-group" role="group" aria-label="Basic radio toggle button group">
					<input checked={borderStroke === 'svgstroke-a'} onChange={handleStrockChange} type="radio" className="btn-check" name="stroke" id="Stroke_A" value="svgstroke-a"/>
					<label className="btn btn-outline-primary" htmlFor="Stroke_A">Stroke 1</label>
				  
					<input checked={borderStroke === 'svgstroke-b'} onChange={handleStrockChange} type="radio" className="btn-check" name="stroke" id="Stroke_B" value="svgstroke-b"/>
					<label className="btn btn-outline-primary" htmlFor="Stroke_B">Stroke 2</label>
				  
					<input checked={borderStroke === 'svgstroke-c'} onChange={handleStrockChange} type="radio" className="btn-check" name="stroke" id="Stroke_C" value="svgstroke-c"/>
					<label className="btn btn-outline-primary" htmlFor="Stroke_C">Stroke 3</label>
				</div>
			</div>
			<div className="mb-4">
				<h6>Layout Section Ligh/Dark</h6>
				<ul className="list-unstyled d-flex flex-wrap">
					<li className="me-2 mb-2 sidebar-toggle">
						<input type="checkbox" className="btn-check" id="Sidebar_dark" onClick={toggleSidebarDark}/>
						<label className="btn btn-outline-primary" htmlFor="Sidebar_dark">Sidebar</label>
					</li>
					<li className="me-2 mb-2 header-toggle">
						<input type="checkbox" className="btn-check" id="Header_dark" onClick={toggleHeaderDark}/>
						<label className="btn btn-outline-primary" htmlFor="Header_dark">Header</label>
					</li>
				</ul>
			</div>
			<div className="mb-4">
				<h6>More App Setting</h6>
				<div className="form-check form-switch bodygradient-toggle">
					<input className="form-check-input" type="checkbox" role="switch" id="bodyGradient" onClick={toggleBodyGradient} defaultChecked/>
					<label className="form-check-label" htmlFor="bodyGradient">Body Gradient Background</label>
				</div>
				<div className="form-check form-switch boxlayout-toggle">
					<input className="form-check-input" type="checkbox" role="switch" id="boxlayout" onClick={toggleBoxLayout}/>
					<label className="form-check-label" htmlFor="boxlayout">Box Layout</label>
				</div>
				<div className="form-check form-switch monochrome-toggle" >
					<input className="form-check-input" type="checkbox" role="switch" id="monochrome" onClick={toggleMonochrome}/>
					<label className="form-check-label" htmlFor="monochrome">Monochrome Mode</label>
				</div>
				<div className="form-check form-switch radius-toggle">
					<input className="form-check-input" type="checkbox" role="switch" id="radius0" onClick={toggleBorderRadius}/>
					<label className="form-check-label" htmlFor="radius0">Border Radius none</label>
				</div>
				<div className="form-check form-switch svg-icon-color">
					<input className="form-check-input" type="checkbox" role="switch" id="IconColor" onClick={toggleIconColor}/>
					<label className="form-check-label" htmlFor="IconColor">Sidebar Icon color</label>
				</div>
				<div className="form-check form-switch cb-shadow">
					<input className="form-check-input" type="checkbox" role="switch" id="BoxShadow" onClick={toggleCardShadow}/>
					<label className="form-check-label" htmlFor="BoxShadow">Card box shadow active</label>
				</div>
			</div>
			<div className="d-flex">
				<button type="button" className="btn w-100 me-1 py-2 btn-primary">Buy Now</button>
				<button type="button" className="btn w-100 ms-1 py-2 btn-dark">View Portfolio</button>
			</div>
		</div>
	</div>
  )
}

export default CommonSetting