import * as React from "react";
import { Form, TextInput, SelectInput, ReferenceInput } from "react-admin";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { DeviiRoundBox, DeviiActionButtonGroup } from "components/base";
import { DatabaseType } from "types";

const CreateDatabase = (props: { isExternal: boolean }) => {
  const navigate = useNavigate();
  const onCancel = () => {
    navigate("/", { replace: true });
  };

  const handleSubmit = (event: DatabaseType) => {
    console.log(event);
  };

  return (
    //   <Create {...props}>
    <DeviiRoundBox
      sx={{
        width: {
          xs: 300,
          sm: 450,
          md: 500,
          lg: 600,
          xl: 600,
        },
        p: 4,
      }}
    >
      <Typography color="primary" component="h5" variant="h5" align="left">
        Configure {props.isExternal ? "External" : "Internal"} Database
      </Typography>
      <Form>
        <div>
          <TextInput
            margin="normal"
            label="Name"
            source="name"
            required
            fullWidth
          />
          <TextInput
            margin="normal"
            label="Description"
            source="description"
            required
            fullWidth
          />
          <ReferenceInput
            source="database_env_id"
            reference="database_environments"
          >
            <SelectInput
              margin="normal"
              label="Environment"
              optionText="environment"
              required
              fullWidth
            />
          </ReferenceInput>
          <ReferenceInput
            source="database_platform_id"
            reference="database_platforms"
          >
            <SelectInput
              margin="normal"
              label="Platform"
              optionText="platform"
              required
              fullWidth
            />
          </ReferenceInput>
        </div>
        <DeviiActionButtonGroup onCancel={onCancel} />
      </Form>
    </DeviiRoundBox>
    //   </Create>
  );
};

export default CreateDatabase;
