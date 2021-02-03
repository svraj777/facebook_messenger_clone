import React, { forwardRef } from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "./massage.css";
const massage = forwardRef(({ massage, userName }, ref) => {
  const isUser = userName === massage.userName;
  return (
    <div ref={ref} className={`massage ${isUser && "massage_user"}`}>
      <Card className={isUser ? "massage_userCard" : "massage_guestCard"}>
        <CardContent>
          <Typography color="textSecondary" variant="h5" component="h2">
            {massage.userName}: {massage.massage}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});
export default massage;
