import { Form } from "react-bootstrap";
import { Grid, GridItem } from "@chakra-ui/react";
import { useUser } from "../../../hooks/useUser";
import SuccessReply from "../CheckOrder/SuccessReply";
import { fetchMyOrder } from "../../../redux/callApi";
import { useAsync } from "react-use";
export default function HistoryOrder() {
  const user = useUser("11d8RQnpQ5S4fHSU3LiM7DIJdl43");
  const result = useAsync(fetchMyOrder("0123123123"), []);
  return user ? (
    <div className="col pd-header">
      <span className="fs-1 pos-relative">
        Lịch sử mua hàng
        <div className="line_bottom" />
      </span>
      <Grid templateColumns="repeat(4, 1fr)" gap={4}>
        <GridItem colSpan={1} bg="tomato" p={4} borderRadius="lg">
          <div>id don hang</div>
          <div>id don hang</div>
          <div>id don hang</div>
          <div>id don hang</div>
          <div>id don hang</div>
        </GridItem>
        <GridItem colSpan={3} bg="tomato" p={4} borderRadius="lg">
          {/* <SuccessReply order="" /> */}
        </GridItem>
      </Grid>
    </div>
  ) : null;
}
