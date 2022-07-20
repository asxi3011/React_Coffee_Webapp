import { Form } from "react-bootstrap";
import { Grid, GridItem } from "@chakra-ui/react";
import { useState } from "react";
import { useUser } from "../../../hooks/useUser";
import SuccessReply from "../CheckOrder/SuccessReply";
import {getUser} from "../../../redux/selector"
import {useSelector} from "react-redux"
import { fetchMyOrder } from "../../../redux/callApi";
import { useAsync } from "react-use";
import axios from "axios";
import DetailOrder from "../../Client/HistoryOrder/DetailOrder";
import NotFound from "../Partials/NotFound";
export default function HistoryOrder() {
  const urlDev = "http://localhost:3030";
  const user = useSelector(getUser)
  const [order, setOrder] = useState();
  const result = useAsync(async () => {
      const orders = await axios.post(`https://sever-coffeehouse.herokuapp.com/getOrderForUser`, {
        phone: user?.phone,
      });
    return orders?.data;
  }, [user]);
  console.log(result);
  return user && result.value ? (
    <div className="col">
      <Grid templateColumns="repeat(4, 1fr)" gap={4}>
        <GridItem colSpan={1} h="100%" p={4} borderRadius="lg">
          <div className="box-details-order p-4 overFlowY-scroll">
            <span className="fs-6">List :</span>
            {result.value.data.map((e) => (
              <div
                className="fs-min itemList"
                key={e.idOrder}
                onClick={() => setOrder(e)}
              >
                {e.idOrder}
              </div>
            ))}
          </div>
        </GridItem>
        <GridItem colSpan={3} p={4} h="100%" borderRadius="lg">
          <SuccessReply order={order} size="full"></SuccessReply>
        </GridItem>
      </Grid>
    </div>
  ) : <div  className="col">loading....</div>;
}
