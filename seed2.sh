# Variable Definitions
# Path to directory bash script is living
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

# Database Variable Definitions
DATABASE="hostinfo"
USER="postgres"
TABLE="locations"

# Output Filename for Faker File
OUTPUT="locations.csv"
FILEPATH="$DIR/$OUTPUT"

# if parameter 1 is not passed as argument default records to be generated to 1000000
LINES=${1:-1000000}

### Import Our Database ###
# SCHEMA="$DIR/schema.sql"
# psql $USER < $SCHEMA

### Run Our Generator Script ###
node generator2.js --output=$FILEPATH --lines=$LINES

### Import Our posts.csv file to seed Database ###
psql $USER -d $DATABASE -c "COPY $TABLE FROM '$FILEPATH' CSV HEADER";

