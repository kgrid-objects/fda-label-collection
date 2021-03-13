# fda-label-collection

Last revised: March 11, 2021

### This README and its collection of files correspond to the paper under review titled:
"An Experiment to Convert Structured Product Labels to Computable Prescribing Information"

Correspondence should be directed to: Dr. Allen Flynn at the University of Michigan (ajflynn@umich.edu).

---

## TABLE OF CONTENTS

   #### 1. PURPOSE OF THIS WORK

   #### 2. REVIEW OF AVAILABLE FILES
   
   #### 3. INSTRUCTIONS FOR DEPLOYING AND USING THE REMDESIVIR LABEL API

---

## 1. PURPOSE OF THIS WORK

The purpose of this work is to make FDA approved prescribing information not just available online but truly computer accessible. 

Starting in 2005, the U.S. Food and Drug Administration (FDA) required pharmaceutical manufacturers to submit drug product prescribing information in  XML format using a common XML document schema called the Structured Product Label (SPL). SPLs resulted in global online access to FDA-approved prescribing information via  DailyMed from the U.S. National Library of Medicine (dailymed.nlm.nih.gov). People can read the content of SPLs using a computer browser but SPLs did not make that content computer accessible, let alone executable. 

This project begins with an experiment to determine how the content in SPLs might be made computer accessible.

Here we provide initial experimental results from work to make the information in the SPL for remdesivir computer accessible. The maaterials here are openly available for inspection, review, and comment.

---

## 2. REVIEW OF AVAILABLE FILES

The files and work described in the paper are available for inspection and review here, including:


#### A copy of the October 2020 Remedesivir Label in PDF format

  [Link to File: PDF October 2020 Remdesivir](https://github.com/kgrid-objects/fda-label-collection/blob/main/PDF%20Oct%202020%20Remdesivir.pdf)

  <img src ="https://github.com/kgrid-objects/fda-label-collection/blob/main/readmeImages/PDF.image.png" height = "400">
  

#### A copy of the October 2020 Remedesivir Prescribing Information in XML format

   [Link to File: XML October 2020 Remdesivir](https://github.com/kgrid-objects/fda-label-collection/blob/main/XML%20Oct%202020%20Remdesivir.xml) 
  
   <img src ="https://github.com/kgrid-objects/fda-label-collection/blob/main/readmeImages/XML.image.png" width = "400">
   

#### An Excel file with content from the Remdesivir OCT 2020 Label organized into 86 question-and-answer pairs (QApairs)

  [Link to File: XL with 86 QA Pairs](https://github.com/kgrid-objects/fda-label-collection/blob/main/XL%20Table%20with%2086%20QApairs.xlsx)
  
  <img src ="https://github.com/kgrid-objects/fda-label-collection/blob/main/readmeImages/XL.image.png" width = "400">


#### A file with a JSON data object combining the 86 QA pairs

  [Link to File: JSON with 86 QA Pairs](https://github.com/kgrid-objects/fda-label-collection/blob/main/JSON.dataObject%20with%2086%20QApairs.txt)
  
  <img src ="https://github.com/kgrid-objects/fda-label-collection/blob/main/readmeImages/JSON.image.png" height = "300">



#### A source code folder for the digital remdesivir label Knowlege Object


There are four files in the folder called "remdesivir-label-v1.0":

1. an /src folder holding an index.js file (index.js)
2. Deployment Description file (deployment.yaml)
3. Service Description file (service.yaml)
4. Knowledge Object metadata file (metadata.json)

Taken together, these four files and their file structure comprise a conformant Knowledge Object (KO). This KO meets the standards for structure and content set by the Knowledge Grid open source software effort at the University of Michigan Medical School (www.kgrid.org).  

KOs of this form carry content that is computer accessible. In this case, that content is found inside the index.js file. In addition to that content, the Deployment Description carries machine-readable technical information about the runtime environment needed to instantiate the index.js file, the Service Description carries a machine-readable description of the API, and the metadata file carries descriptive metadata about the KO.



#### A Postman requests file for engaging the API backed by the remdesivir label Knowledge Object


This file can be downloaded and then uploaded into Postman. For more information, see the instructions below.


#### A Release of the remdesivir prescribing information Knowledge Object in a ZIP file


https://github.com/kgrid-objects/fda-label-collection/releases/tag/Version1 


---

## 3. INSTRUCTIONS FOR USING THE REMDESIVIR LABEL API


#### TRY OUT THE REMDESIVIR LABEL API IMMEDIATELY VIA THE WEB


We have deployed this API already. It is easy to try it!  Just do this:

1. Copy the following four-line CURL command

```
curl -X 'POST' \
  'https://activator-playground.herokuapp.com/js/fda_label_content/fda_label_content' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '0'
```

2. Using your browser, go to https://reqbin.com/curl  

3. At REQBIN, paste the CURL command you copied above into the box on the left and click the 'Run' button

   After clicking 'Run', the expected output when input is '0' includes ALL of the 86 QA pairs:
   
<sup>
{
    "result": {
        "QApair_1": {
            "QApair_label": "brand_name",
            "question_id": "b8408b213e84449dbb09fe9efc8fce44",
            "question": "What is its brand name?",
            "answer_id": "95dca543c2344635b15a90e3c2fac164",
            "answer": "VEKLURY",
            "answer_nature": "Unequivocal Answer"
        },
        "QApair_2": {
            "QApair_label": "generic_name",
            "question_id": "ad47b354ee714cc8b7ad6ed73ca889c9",
            "question": "What is its generic name?",
            "answer_id": "0448074035454eacabeddaabb6777820",
            "answer": "remdesivir",
            "answer_nature": "Unequivocal Answer"
        },
        ...
</sup>
<p></p>

3. Next, in REQBIN, change the '0' to a '1' in the last line of the curl command and run it again:

```
  -d '1'
```

  The expected ouput when input is '1' is a list of all question identifiers only:
  
<sup>
"result": "[{\"question_id\":\"b8408b213e84449dbb09fe9efc8fce44\"},{\"question_id\":\"ad47b354ee714cc8b7ad6ed73ca889c9\"},{\"question_id\":\"b130fa66457849efb6272ec7deca93e1\"},{\"question_id\":\"7df59111730a49699f6864257c73738e\"},{\"question_id\":\"656d693bbe8f49b4b2f7f8527655636e\"},{\"question_id\":\"0109d944130344c2869ebc8e9329ac91\"},
...
</sup>
<p></p>

4. Now, change the '1' to a '2' in the last line of the curl command and run it again on REQBIN:

```
  -d '2'
```

  This time, the expected ouput when input is '2' is a list of all question identifiers and their corresponding questions:

<sup>
 "result": "[{\"question_id\":\"b8408b213e84449dbb09fe9efc8fce44\",\"question\":\"What is its brand name?\"},{\"question_id\":\"ad47b354ee714cc8b7ad6ed73ca889c9\",\"question\":\"What is its generic name?\"},{\"question_id\":\"b130fa66457849efb6272ec7deca93e1\",\"question\":\"What drug products are included?\"},{\"question_id\":\"7df59111730a49699f6864257c73738e\",\"question\":\"What year was its initial U.S. approval?\"},{\"question_id\":\"656d693bbe8f49b4b2f7f8527655636e\",\"question\":\"What is its indication?\"},{\"question_id\":\"0109d944130344c2869ebc8e9329ac91\",\"question\":\"Where should it be administered?\"},{\"question_id\":\"a79effe7b17d4a778e13dc8858b6d225\",\"question\":\"What testing needs to be done before Initiating and during treatment?\"},{\"question_id\":\"c3e78446f57f4580872e8f085dc02863\",\"question\":\"What testing of kidney function needs to be done before initiating and during treatment?\"},{\"question_id\":\"42799976d99f4b8bb900584e4c4ba39f\",\"question\":\"What testing of liver function needs to be done before initiating and during treatment?\"},{\"question_id\":\"16bf1bea6419487ea70e8fb869d4a5ef\",\"question\":\"What testing related to blood coagulation needs to be done before initiating and during treatment? \"},{\"question_id\":\"ee8f02b6e42c4c8895faa75fd29b7806\",\"question\":\"What is the recommended dosage?\"},{\"question_id\":\"16e23675e7794705b4bfeb119321c466\",\"question\":\"What is the recommended treatment duration?\"},...   
</sup>
<p></p>


5. Next, change the '2' to a '3' in the last line of the curl command and run it once again on REQBIN:

```
  -d '3'
```

  The expected ouput when input is '3' is a list of all answer identifiers only:

<sup>
 "result": "[{\"answer_id\":\"95dca543c2344635b15a90e3c2fac164\"},{\"answer_id\":\"0448074035454eacabeddaabb6777820\"},{\"answer_id\":\"74d406dff7cd4774a538f1fe8bb90cdc\"},{\"answer_id\":\"bd10d1988c90413599e83481a46b1546\"},{\"answer_id\":\"7c5573a83ba54ac5b8b412988bd8f29c\"},{\"answer_id\":\"b2d9ea3ac32e4e2591342d7998a461d3\"},{\"answer_id\":\"3927118dce35411b90dda96143659f4f\"},{\"answer_id\":\"c4bff4466b1e480191d4738916c6d90c\"},...
</sup>
<p></p>

6. d
8. d
9. 


#### TRY OUT THE REMDESIVIR LABEL API USING POSTMAN

1. Download and install POSTMAN
2. Download POSTMAN requests collection file from this repo
3. Run POSTMAN
4. Upload POSTMAN requests colllection file into your copy of POSTMAN
5. ... 

To test the KO in Postman, first save the KO zip file (remdesivir-label-v1.0.zip) to your computer.

Next, in Postman:

- Begin a POST request to https://activator-playground.herokuapp.com/kos/  
- In the body of the request, add the KEY “ko” and change the type to “File” 
- In the VALUE cell, upload the KO zip file.

  <img src ="https://github.com/kgrid-objects/fda-label-collection/blob/main/readmeImages/post_ko.image.png" width = "800">

- Send the POST request
- A successful response should appear as: 
    - "Added": "js/fda_label_content/v1.0/"

  <img src ="https://github.com/kgrid-objects/fda-label-collection/blob/main/readmeImages/added_ko.image.png" width = "800">

Now that the object has been activated, we will send a POST request to https://activator-playground.herokuapp.com/js/fda_label_content/1.0/fda_label_content

 - In the body of the request, select “raw” JSON and enter the test answer ID “ce519bb9d44f475bb4c3b0b8b5399fb6”

  <img src ="https://github.com/kgrid-objects/fda-label-collection/blob/main/readmeImages/test_ko.image.png" width = "800">

 - Send the POST request. A successful response should return the “result” JSON object with information on the KO following it.

  <img src ="https://github.com/kgrid-objects/fda-label-collection/blob/main/readmeImages/response_ko.image.png" width = "800">



#### DEPLOY THE REMDESIVIR LABEL API ON YOUR OWN SERVER


Using Knowledge Grid technology - specifically the Knowledge Grid Activator API Gateway Tool - it is possible to use the Knowledge Object in this repo and deploy the Remdesivir Prescribing Information API any suitable server.

To do this, it will help if have prior experience with system administration and API deployment. We can only provide high-level instructions here. The instructions use the remdesivir Knowledge Object (KO) provided here.

The general steps to follow are:

1. Download the KGrid Activator from 
2. Learn how to configure and use the KGrid Activator at 
3. Download the Remdesivir KO ZIP flie from this repo
4. Unzip and activate the Remdesivir KO on your server using the Activator
5. Engage the resulting Remdesivir Prescribing Information API wherever you have deployed it


---
---
---
  


 
