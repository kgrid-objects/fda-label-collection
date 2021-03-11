# fda-label-collection

Last revised: March 11, 2021

### This README and its collection of files correspond to the paper under review titled:
"An Experiment to Convert Structured Product Labels to Computable Prescribing Information"

---

## TABLE OF CONTENTS

   #### 1. PURPOSE OF THIS WORK

   #### 2. REVIEW OF AVAILABLE FILES
   
   #### 3. INSTRUCTIONS FOR DEPLOYING AND USING THE REMDESIVIR LABEL API

---

1. PURPOSE OF THIS WORK

Starting in 2005, the U.S. Food and Drug Administration (FDA) required pharmaceutical manufacturers to submit detailed drug product prescribing information in an XML-based format using a common XML document schema called the Structured Product Label (SPL). SPLs resulted in global online access to FDA-approved prescribing information via the DailyMed web application from the U.S. National Library of Medicine (dailymed.nlm.nih.gov). SPLs made the content in SPLs viewable in a computer browser but they did not make the content in drug product labels computer accessible or executable. 

This project starts with an experiment to determine how the content in SPLs might be made computer accessible. Our ultimate purpose is to make all FDA approved drug product label information computer accessible. For now, however, our earilest example from refashioning the information in the SPL for remdesivir is available for review and comment.

---

2. REVIEW OF AVAILABLE FILES

The files and work described in the paper are available for inspection and review here, including:

```
1. A copy of the October 2020 Remedesivir Label with its Prescribing Information in PDF format
```
  [Link to File: PDF October 2020 Remdesivir](https://github.com/kgrid-objects/fda-label-collection/blob/main/PDF%20Oct%202020%20Remdesivir.pdf)
 
  <img src ="https://github.com/kgrid-objects/fda-label-collection/blob/main/readmeImages/PDF.image.png" width = "400" height = "500">
  
```
2. A copy of the October 2020 Remedesivir Prescribing Information in XML format
```
   [Link to File: XML October 2020 Remdesivir](https://github.com/kgrid-objects/fda-label-collection/blob/main/XML%20Oct%202020%20Remdesivir.xml) 
  
   <img src ="https://github.com/kgrid-objects/fda-label-collection/blob/main/readmeImages/XML.image.png" width = "400">

```
3. An Excel file with content from the Remdesivir OCT 2020 Label organized into 86 question-and-answer pairs (QApairs)
```
  [Link to File: XL with 86 QA Pairs](https://github.com/kgrid-objects/fda-label-collection/blob/main/XL%20Table%20with%2086%20QApairs.xlsx)
  
  <img src ="https://github.com/kgrid-objects/fda-label-collection/blob/main/readmeImages/XL.image.png" width = "400">

```
4. A file with a JSON data object combining the 86 QA pairs
```

```
5. A folder with a working Knowledge Grid Knowlege Object containing the following files
```
      a. a SRC folder containing an index.js file with a working JavaScript function 
      b. a Deployment Description file
      c. a Service Description file in Open API 3.0 YAML format
      d. a Knowledge Object metadata file
    
```
6. A Postman requests file for engaging the API backed by the remdesivir SPL Knowledge Object
```

---

3. INSTRUCTIONS FOR DEPLOYING AND USING THE REMDESIVIR LABEL API

To test the KO in Postman, first save the KO zip file (remdesivir-label-v1.0.zip) to your computer.

Next, in Postman:

- Begin a POST request to https://activator-playground.herokuapp.com/kos/  
- In the body of the request, add the KEY “ko” and change the type to “File” 
- In the VALUE cell, upload the KO zip file.

  <img src ="https://github.com/kgrid-objects/fda-label-collection/blob/main/readmeImages/post_ko.image.png" width = "600">

- Send the POST request
- A successful response should appear as: 
    - "Added": "js/fda_label_content/v1.0/"

  <img src ="https://github.com/kgrid-objects/fda-label-collection/blob/main/readmeImages/added_ko.image.png" width = "600">

Now that the object has been activated, we will send a POST request to https://activator-playground.herokuapp.com/js/fda_label_content/1.0/fda_label_content

In the body of the request, select “raw” JSON and enter the test answer ID “ce519bb9d44f475bb4c3b0b8b5399fb6”

  <img src ="https://github.com/kgrid-objects/fda-label-collection/blob/main/readmeImages/test_ko.image.png" width = "600">

Send the POST request. A successful response should return the “result” JSON object with information on the KO following it.

  <img src ="https://github.com/kgrid-objects/fda-label-collection/blob/main/readmeImages/response_ko.image.png" width = "600">



---
---
---
  


 
