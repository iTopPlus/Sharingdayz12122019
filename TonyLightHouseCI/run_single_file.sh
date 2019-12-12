#!/bin/bash
if [ $# -gt 0 ] 
then    
    npx cypress run -b chrome --spec "cypress/integration/$1"
else
    echo "Missing Param Path File :: EXAMPLE:: COMPONENT/SHOPCART/FILENAME.spec.js";
fi