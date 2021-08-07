# fda-label-collection

Last revised: August 7, 2021

### This README and its collection of files correspond to the paper under review titled:
"An Experiment to Convert Structured Product Labels to Computable Prescribing Information"

Correspondence should be directed to: Dr. Allen Flynn at the University of Michigan (ajflynn@umich.edu).

---

## TABLE OF CONTENTS

   #### 1. [PURPOSE OF THIS WORK](#1-purpose-of-this-work-1)

   #### 2. [BRIEF TECHNICAL BACKGROUND](#2-brief-technical-background)
   
   #### 3. [REVIEW OF FILES](#3-review-of-files-1)
   
   #### 4. [INSTRUCTIONS FOR DEPLOYING AND USING THE REMDESIVIR LABEL API](#4-instructions-for-using-the-remdesivir-label-api)

---

## 1. PURPOSE OF THIS WORK

The purpose of this work is to make FDA approved prescribing information not just available online but truly computer accessible. 

Starting in 2005, the U.S. Food and Drug Administration (FDA) required pharmaceutical manufacturers to submit drug product prescribing information in  XML format using a common XML document schema called the [Structured Product Label (SPL)](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=96). SPLs resulted in global online access to FDA-approved prescribing information via  DailyMed from the U.S. National Library of Medicine (dailymed.nlm.nih.gov). People can read the content of SPLs using a computer browser but SPLs did not make that content computer accessible, let alone executable. 

This project begins with an experiment to determine how the content in SPLs might be made computer accessible.

Here we provide initial experimental results from work to make the information in the SPL for remdesivir computer accessible. 

The materials here are openly available for inspection, review, and comment. Send comments to ajflynn@umich.edu.

---

## 2. BRIEF TECHNICAL BACKGROUND

The first experiment for this project breaks down and then re-represents and reorganizes the FDA-approved prescribing information for Remdesivir. To do so, a question and answer pattern is used and the content generated is serialized as a JavaScript Object Notation (JSON) data object. Next, the JSON data object with its pairs of questions and corresponding answers (QA pairs) is then wrapped in a JavaScript function. This JavaScript function is then augmented with several other files to form a compound digital Knowledge Object (KO). Finally, when used with a tool called the KGrid Activator, the Remdesivir Label KO enables an application programming interface (API). Once the Remdesivir Label API is established then client applications running on computers can directly access the questions and answers that convey prescribing information for Remdesivir.   

---

## 3. REVIEW OF FILES

The files and work described in the paper are available for inspection and review here, including:


#### A copy of the October 2020 Remedesivir Prescribing Information in PDF format

  [Link to File: PDF October 2020 Remdesivir](https://github.com/kgrid-objects/fda-label-collection/blob/main/PDF%20Oct%202020%20Remdesivir.pdf)

  <img src ="https://github.com/kgrid-objects/fda-label-collection/blob/main/readmeImages/PDF.image.png" height= "75%" width = "75%">
  

#### A copy of the October 2020 Remedesivir Prescribing Information in XML format

   [Link to File: XML October 2020 Remdesivir](https://github.com/kgrid-objects/fda-label-collection/blob/main/XML%20Oct%202020%20Remdesivir.xml) 
  
   <img src ="https://github.com/kgrid-objects/fda-label-collection/blob/main/readmeImages/XML.image.png" height= "75%" width = "75%">
   

#### An Excel file with Remdesivir Prescribing Information organized into 86 question-and-answer pairs (QA pairs)

  [Link to File: XL with 86 QA Pairs](https://github.com/kgrid-objects/fda-label-collection/blob/main/XL%20Table%20with%2086%20QApairs.xlsx)
  
  <img src ="https://github.com/kgrid-objects/fda-label-collection/blob/main/readmeImages/XL.image.png" height= "100%" width = "100%">


#### A file with a JSON data object combining all 86 QA pairs

  [Link to File: JSON with 86 QA Pairs](https://github.com/kgrid-objects/fda-label-collection/blob/main/JSON.dataObject%20with%2086%20QApairs.txt)
  
  <img src ="https://github.com/kgrid-objects/fda-label-collection/blob/main/readmeImages/JSON.image.png" height= "50%" width = "50%">



#### A folder for the digital Remdesivir Label Knowlege Object


There are four files in the folder called "remdesivir-label-v1.0":

1. an /src folder holding an index.js file (index.js)
2. Deployment Description file (deployment.yaml)
3. Service Description file (service.yaml)
4. Knowledge Object metadata file (metadata.json)

Taken together, these four files and their file structure make a conformant Knowledge Object (KO). This Remdesivir Label KO meets the standards for structure and content of the open-source Knowledge Grid software being developed at the University of Michigan Medical School (www.kgrid.org).  

KOs carry content that is computer accessible. In this case, that content is inside the index.js file. In addition, the Deployment Description carries machine-readable technical information about the runtime environment needed to run the index.js file, the Service Description carries a machine-readable description of the API, and the metadata file carries descriptive metadata about the Remdesivir Label KO.


#### A Postman requests file for engaging the API backed by the Remdesivir Label Knowledge Object


This file can be downloaded at the link below and then imported into Postman. For more information about this, see section 4. INSTRUCTIONS FOR USING THE REMDESIVIR LABEL API.

https://github.com/kgrid-objects/fda-label-collection/blob/main/fda-label-collection.postman_collection.json


#### A Release of the Remdesivir Label Knowledge Object in a ZIP file


https://github.com/kgrid-objects/fda-label-collection/releases/tag/Version1 


---

## 4. INSTRUCTIONS FOR USING THE REMDESIVIR LABEL API


#### TRY OUT THE REMDESIVIR LABEL API IMMEDIATELY VIA THE WEB WITH REQBIN


We have deployed this API already. It is easy to try it!  Just do this:

STEP 1. Copy the following four-line CURL command

```
curl -X 'POST' \
  'https://activator.kgrid.org/js/fda_label_content/fda_label_content' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '0'
```

STEP 2. Using your browser, go to https://reqbin.com/curl  

STEP 3. At REQBIN, paste the CURL command you copied above into the box on the left and click the 'Run' button

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

STEP 4. Next, in REQBIN, change the '0' to a '1' in the last line of the curl command and run it again:

```
  -d '1'
```

The expected ouput when input is '1' is a list of all question identifiers only:
  
<sup>
"result": "[{\"question_id\":\"b8408b213e84449dbb09fe9efc8fce44\"},{\"question_id\":\"ad47b354ee714cc8b7ad6ed73ca889c9\"},{\"question_id\":\"b130fa66457849efb6272ec7deca93e1\"},{\"question_id\":\"7df59111730a49699f6864257c73738e\"},{\"question_id\":\"656d693bbe8f49b4b2f7f8527655636e\"},{\"question_id\":\"0109d944130344c2869ebc8e9329ac91\"},
...
</sup>
<p></p>

STEP 5. Now, change the '1' to a '2' in the last line of the curl command and run it again on REQBIN:

```
  -d '2'
```

This time, the expected ouput when input is '2' is a list of all question identifiers and their corresponding questions:

<sup>
 "result": "[{\"question_id\":\"b8408b213e84449dbb09fe9efc8fce44\",\"question\":\"What is its brand name?\"},{\"question_id\":\"ad47b354ee714cc8b7ad6ed73ca889c9\",\"question\":\"What is its generic name?\"},{\"question_id\":\"b130fa66457849efb6272ec7deca93e1\",\"question\":\"What drug products are included?\"},{\"question_id\":\"7df59111730a49699f6864257c73738e\",\"question\":\"What year was its initial U.S. approval?\"},{\"question_id\":\"656d693bbe8f49b4b2f7f8527655636e\",\"question\":\"What is its indication?\"},{\"question_id\":\"0109d944130344c2869ebc8e9329ac91\",\"question\":\"Where should it be administered?\"},{\"question_id\":\"a79effe7b17d4a778e13dc8858b6d225\",\"question\":\"What testing needs to be done before Initiating and during treatment?\"},...   
</sup>
<p></p>


STEP 6. Next, change the '2' to a '3' in the last line of the curl command and run it once again on REQBIN:

```
  -d '3'
```

The expected ouput when input is '3' is a list of all answer identifiers only:

<sup>
 "result": "[{\"answer_id\":\"95dca543c2344635b15a90e3c2fac164\"},{\"answer_id\":\"0448074035454eacabeddaabb6777820\"},{\"answer_id\":\"74d406dff7cd4774a538f1fe8bb90cdc\"},{\"answer_id\":\"bd10d1988c90413599e83481a46b1546\"},{\"answer_id\":\"7c5573a83ba54ac5b8b412988bd8f29c\"},{\"answer_id\":\"b2d9ea3ac32e4e2591342d7998a461d3\"},{\"answer_id\":\"3927118dce35411b90dda96143659f4f\"},{\"answer_id\":\"c4bff4466b1e480191d4738916c6d90c\"},...
</sup>
<p></p>

STEP 7. Now change the '3' to a '4' in the last line of the curl command and run it another time on REQBIN:

```
  -d '4'
```

The expected ouput when input is '4' is a list of all answer identifiers and their corresponding answers:

<sup>
 "result": "[{\"answer_id\":\"95dca543c2344635b15a90e3c2fac164\",\"answer\":\"VEKLURY\"},{\"answer_id\":\"0448074035454eacabeddaabb6777820\",\"answer\":\"remdesivir\"},{\"answer_id\":\"74d406dff7cd4774a538f1fe8bb90cdc\",\"answer\":\"VEKLURY® (remdesivir) for injection, for intravenous use VEKLURY® (remdesivir) injection, for intravenous use\"},{\"answer_id\":\"bd10d1988c90413599e83481a46b1546\",\"answer\":\"2020\"},{\"answer_id\":\"7c5573a83ba54ac5b8b412988bd8f29c\",\"answer\":\"VEKLURY is indicated for adults and pediatric patients (12 years of age and older and weighing at least 40 kg) for the treatment of coronavirus disease 2019 (COVID-19) requiring hospitalization.\"},{\"answer_id\":\"b2d9ea3ac32e4e2591342d7998a461d3\",\"answer\":\"VEKLURY should only be administered in a hospital or in a healthcare setting capable of providing acute care comparable to inpatient hospital care.\"},{\"answer_id\":\"3927118dce35411b90dda96143659f4f\",\"answer\":\"Determine eGFR in all patients before starting VEKLURY and monitor while receiving VEKLURY as clinically appropriate. Perform hepatic laboratory testing in all patients before starting VEKLURY and while receiving VEKLURY as clinically appropriate.Determine prothrombin time in all patients before starting VEKLURY and monitor while receiving VEKLURY as clinically appropriate.\"},...
</sup>
<p></p>

STEP 8. Finally, using REQBIN, request a specific question and its answer by submitting a question identifier by using this input:

```
  -d '"656d693bbe8f49b4b2f7f8527655636e"'
```

The output from this request gives the indication :

<sup>
"result": "[{\"QApair_label\":\"indication\",\"question_id\":\"656d693bbe8f49b4b2f7f8527655636e\",\"question\":\"What is its indication?\",\"answer_id\":\"7c5573a83ba54ac5b8b412988bd8f29c\",\"answer\":\"VEKLURY is indicated for adults and pediatric patients (12 years of age and older and weighing at least 40 kg) for the treatment of coronavirus disease 2019 (COVID-19) requiring hospitalization.\",\"answer_nature\":\"Unequivocal Answer\"}]",
</sup>
<p></p>

#### TRY OUT THE REMDESIVIR LABEL API ONLINE USING THE SWAGGER EDITOR

Here is a link to a page where the API can be tried online in a different way using the Swagger Editor:

https://editor.swagger.io/?url=https://activator.kgrid.org/kos/js/fda_label_content/v1.0/service.yaml

The link above should take you to a browser screen that looks like this:

 <img src ="https://github.com/kgrid-objects/fda-label-collection/blob/main/readmeImages/SWAGGER.image.png" height= "100%" width = "100%">

To engage the API using the Swagger Editor, click on the green POST request button on the right to begin.

#### TRY OUT THE REMDESIVIR LABEL API USING POSTMAN

STEP 1. Download and install POSTMAN from https://www.postman.com/downloads/

STEP 2. Copy the following link:
`https://raw.githubusercontent.com/kgrid-objects/fda-label-collection/main/fda-label-collection.postman_collection.json`
> This link points to the POSTMAN requests collection file that we created. Alternatively, you can download this file by right clicking <a href="https://raw.githubusercontent.com/kgrid-objects/fda-label-collection/main/fda-label-collection.postman_collection.json">HERE</a> and
select save link as; if you choose to download the file then stay on the `File` tab after you click the Import button (do not select the `Link` tab).

STEP 3. Run POSTMAN on your machine

STEP 4. Click on `Import` button as seen below

<img src ="https://github.com/kgrid-objects/fda-label-collection/blob/main/readmeImages/POSTMAN.image.png" height= "38%" width = "38%">

STEP 5. Select the `Link` tab, paste the copied link and click the `Continue` button

<img src ="https://github.com/kgrid-objects/fda-label-collection/blob/main/readmeImages/POSTMAN.image2.png" height= "100%" width = "100%">

STEP 6. Expand the `fda-label-collection` and then click `Example 1`

STEP 7. Click on blue `Send` button which will initiate a POST request to https://activator-playground.herokuapp.com/js/fda_label_content/1.0/fda_label_content
> By default, the body of the request should show “raw” JSON is selected and the answer id "ce519bb9d44f475bb4c3b0b8b5399fb6" (with quotes) on the first line

<img src ="https://github.com/kgrid-objects/fda-label-collection/blob/main/readmeImages/test_ko.image.png" height= "100%" width = "100%">

STEP 8. A successful response should return the “result” JSON object with information on the KO following it.

<img src ="https://github.com/kgrid-objects/fda-label-collection/blob/main/readmeImages/response_ko.image.png" height= "100%" width = "100%">

> We included an `Example 2` which after you click the blue Send button you should get back the following message:

```
{
    "result": "\nInput error. Please try again.\n\t\t\n0 = send the whole remdesivir_label_object\t\t\n1 = send all of the question IDs as a list\t\t\n2 = send all of the question IDs and questions\t\t\n3 = send all of the answer IDs as a list\t\t\n4 = send all of the answer IDs and answers\t\t\nquestion/answer identifier = send the single object",
    "info": ...
}
```

> We have also provided an optional file called `Optional - Deploy the Remdesivir Label API on your own server` which is revelant to the section below.

#### DEPLOY THE REMDESIVIR LABEL API ON YOUR OWN SERVER


Using Knowledge Grid technology - specifically the Knowledge Grid Activator API Gateway Tool - it is possible to download and deploy the Remdesivir Label to establish the Remdesivir Label API on any suitable server (including typical laptops).

To establish the API locally on a server, it will help if have prior experience with system administration and API deployment. We can only provide high-level instructions here. 

The general steps to follow are:

1. Download the KGrid Activator from its release site: https://github.com/kgrid/kgrid-activator/releases/tag/kgrid-activator-1.5.1 
2. Learn how to configure and use the KGrid Activator at: https://kgrid.org/kgrid-activator/#activator-quick-start
3. Download the Remdesivir Label KO ZIP file release from this repo: https://github.com/kgrid-objects/fda-label-collection/releases
4. First, unzip and then, once the KO is unzipped, activate the Remdesivir Label KO on your server using the KGrid Activator
5. Engage the resulting Remdesivir Prescribing Information API wherever you have deployed it (see API use examples above)


---
---
---
  


 
