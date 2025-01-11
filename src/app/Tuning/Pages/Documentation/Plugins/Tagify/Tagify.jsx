"use client";
import React, { useEffect } from 'react'
//import Tagify from '@yaireo/tagify';

import 'prismjs/themes/prism.css';

const TagifyC = () => {

    useEffect(() => {
        const inputEl1 = document.querySelector('input[name=basic]');
        if (inputEl1) {
         // new Tagify(inputEl1);
        }

        const inputEl2 = document.querySelector('input[name=input-custom-dropdown]');
        if (inputEl2) {
        // new Tagify(inputEl2, {
        //     whitelist: ["css", "html", "javascript"],
        //     dropdown: {
        //     enabled: 1,
        //     },
        // });
        }

        const textareaEl = document.querySelector('textarea[name=tags2]');
        if (textareaEl) {
        // new Tagify(textareaEl, {
        //     enforceWhitelist: true,
        //     whitelist: [
        //     "The Godfather",
        //     "The Matrix",
        //     ],
        // });
        }

        const inputEl3 = document.querySelector('.customLook');
        if (inputEl3) {
       // new Tagify(inputEl3);
        }

        const inputEl4 = document.querySelector('input[name=users-list-tags]');
        if (inputEl4) {
        // new Tagify(inputEl4, {
        //     dropdown: {
        //     enabled: 1,
        //     maxItems: 1, // Allow only one item from the dropdown to be added
        //     position: "text",
        //     closeOnSelect: false,
        //     },
        //     whitelist: ["abatisse2@nih.gov", "Justinian Hattersley"], // Whitelisted suggestions
        // });
        }

        const inputEl5 = document.querySelector('input[name=tags3]');
        if (inputEl5) {
        // new Tagify(inputEl5, {
        //     dropdown: {
        //     enabled: 1,
        //     maxItems: 6, // Set maximum number of tags to 6
        //     position: "input",
        //     closeOnSelect: false,
        //     highlightFirst: true,
        //     },
        // });
        }
    }, []);

    const tagifyCode = `
    import Tagify from '@yaireo/tagify';

    useEffect(() => {
        const inputEl = document.querySelector('input[name=basic]');
        if (inputEl) {
          new Tagify(inputEl);
        }
      }, []);

    return (
        <input name='basic' value='tag1, tag2 autofocus' />
    )
  `;

  return (
    <div className="content px-xl-5 px-lg-4 px-3 py-3 page-body bg-card">
			
    <h4 className="mb-4">Tagify</h4>
    <p className="lead">Transforms an input field or a textarea into a Tags component, in an easy, customizable way, with great performance and small code footprint, exploded with features. <a href="https://yaireo.github.io/tagify/" rel="nofollow" target="_blank">Tagify</a></p>
    <div className="row g-3">
        <div className="col-12">
            <pre className='h6 language-html text-primary'><code>{tagifyCode}</code></pre>
        </div>
        <div className="col-12">
            <h5>Basic example</h5>
            <p>Passing the input element as a parameter to Tagify will transform it into a tags-component. Without any settings, the user will be allowed to create any tags they want, without a count limit.</p>
            <input className="form-control" name='basic' defaultValue='tag1, tag2 autofocus'/>
        </div>
        <div className="col-12">
            <h5>Same using custom suggestions:</h5>
            <p>The suggestions are styled as tags this time. Clicking on a suggested it, it will be added to Tagify</p>
            <input className='form-control some_class_name' name='input-custom-dropdown' placeholder='write some tags' defaultValue='css, html, javascript'/>
        </div>
        <div className="col-12">
            <h5>Textarea</h5>
            <p>In this example, the field is pre-ocupied with 3 tags, and last tag is not included in the whitelist, and will be removed because the <code>enforceWhitelist</code> setting flag is set to <code>true</code></p>
            <textarea className="form-control" name='tags2' placeholder='Movie names' defaultValue='The Godfather, The Matrix' />
        </div>
        <div className="col-12">
            <h5>Easy to customize</h5>
            <p>The easiest way to customize styles (colors, borders, spacing, radii, etc.) is by using <a href="https://github.com/yairEO/tagify#css-variables" target="_blank">CSS variables.</a></p>
            <div className="input-group">
                <input className='form-control customLook' defaultValue='some.name@website.com'/>
                <button className="btn btn-primary" type="button">+</button>
            </div>
        </div>
        <div className="col-12">
            <h5>Users list</h5>
            <p>This example shows how to customize Tagify further. It also includes an Add All option as the first item in the suggestions dropdown list.</p>
            <input className="form-control" name='users-list-tags' defaultValue='abatisse2@nih.gov, Justinian Hattersley'/>
        </div>
        <div className="col-12">
            <h5>Advance options</h5>
            <p>In this example, the dropdown.enabled setting is set (minimum charactes typed to show the dropdown) to 3. Maximum number of tags is set to 6</p>
            <input className="form-control" name='tags3' defaultValue='[{"value":"point"}, {"value":"soft"}]' pattern='^[A-Za-z_✲ ]{1,15}$'/>
        </div>
    </div>
    </div>
    )
}

export default TagifyC