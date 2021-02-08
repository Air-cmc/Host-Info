DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

# Database Variable Definitions
DATABASE="hostinfo"
USER="postgres"
TABLE="properties"

# Output Filename for Faker File
OUTPUT="properties.csv"
FILEPATH="$DIR/$OUTPUT"

# if parameter 1 is not passed as argument default records to be generated to 1000000
LINES=${1:-1000000}

### Import Our Database ###
# SCHEMA="$DIR/schema.sql"
# psql $USER < $SCHEMA

### Run Our Generator Script ###
node generator4.js --output=$FILEPATH --lines=$LINES

### Import Our posts.csv file to seed Database ###
psql $USER -d $DATABASE -c "COPY $TABLE FROM '$FILEPATH' CSV HEADER";
psql $USER -d $DATABASE -c "CREATE INDEX idx_properties_locationid
ON properties(locationid)";

