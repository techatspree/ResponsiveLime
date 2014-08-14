# ResponsiveLime

ResponsiveLime is a LimeSurvey template that builds on Foundation to exchange the default table layout with a responsive grid. Furthermore it uses retina.js to handle high resolution images.

## Install

1. Download the repository
2. Upload the template to LimeSurvey

   2.a Copy the template to limesurvey/upload/templates/
   
   *or*
   
   2.b Use the "Template editor" web interface to import the template as a ZIP file
   (As noted in [LimeSurvey's documentation](http://manual.limesurvey.org/The_template_editor#Creating_a_new_Template), keep in mind that ZIP files created on OS X include a _MACOSX folder that causes issues while uploading. You can easily clean up the ZIP file with [ZipCleaner](http://www.macupdate.com/app/mac/25497/zipcleaner))
   
3. Go to your survey's "Survey proporties - General settings", select the tap "Presentation & navigation" and choose the Template

### How to create a ZIP File in the shell
```bash
zip -r ResponsiveLime.zip . -x *.git* -x *.DS_Store* uncompressed
mv ResponsiveLime.zip ..
```

## Credits

- [Foundation 5.3.3](http://foundation.zurb.com/) (normalize.css, modernizer.js)
- [retina.js](http://retinajs.com/)

## Future development

- CSS for complex answer forms like two dimensional matrixes
- Foundation Interchange instead of retina.js (Currently, the jQuery version that Foundation relies on causes issues with the default JavaScripts by LimeSurvey)
- new icon set
- print CSS template
