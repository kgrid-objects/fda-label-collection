# fda-label-collection

March 2021

THIS COLLECTION OF FILES CORREPSONDS TO THE PAPER UNDER REVIEW TITLED, "An Experiment in Moving From Structured Product Labels to Computable Prescribing Information"

The files and work described in the paper are available for inspection and review here.

The content in this repository includes the following:

1. A copy of the October 2020 Remedesivir Prescribing Information in PDF format
2. A copy of the October 2020 Remedesivir Prescribing Information in XML format
3. An Excel file with extracted content from the Remdesivir 2020 Prescribing Information organized into 86 question-and-answer paris (QApairs)
4. A file with a JSON data object combining the 86 QA pairs
5. A folder with a working Knowledge Grid Knowlege Object containing the following files
      a. a SRC folder containing an index.js file with a working JavaScript function 
      b. a Deployment Description file
      c. a Service Description file in Open API 3.0 YAML format
      d. a Knowledge Object metadata file
  
  


This new collection of Knowledge Objects explores how to represent the content of FDA Structured Product Labels in different ways that allow for more granular information retrieval.

An initial move is to convert an existing XML representation of the remdesivir prescribing information "label" into JSON using the following tool: 

https://www.convertjson.com/xml-to-json.htm

Another early move is to build the remdesivir KO for this collection with content arranged in a new way. The remdesivir label Knowledge Object can be an attempt to use a question-answer approach to re-organizing and structuring remdesivir FDA label content in a large JSON object. The KO allows that large JSON object to be interrogated via an API described in its service description. 

What we learn from the remdesivir label KO will be applied to future explorations along these lines. 

The content of the remdesivir label is broken down and analyzed here:

https://docs.google.com/spreadsheets/d/1Cs5Aq-cRJ2MTtVB9uqRuC1LnJiup95OjjY0rgrewaU0/edit?usp=sharing 

More to come ... 
