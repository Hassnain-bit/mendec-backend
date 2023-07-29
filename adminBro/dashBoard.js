import { Box, Text, Loader } from "@adminjs/design-system";
​
const Dashboard = () => {
  return (
    //Parent Box
    <Box style={{ padding: "20px" }}>
      <Box>
        <Box width={[1, 1, 1, 1]} variant="card">
          {" "}
          <Text
            lineHeight="1"
            fontFamily="fantasy"
            fontSize="40px"
            textAlign="center"
          >
            Welcome on Board !
          </Text>{" "}
        </Box>
​
        <Box
          marginTop="20px"
          justifyContent="space-between"
          flex
          flexWrap="wrap"
        >
          <Box width={[1, 1, 1, 1]} variant="card" marginBottom="12px">
            {" "}
            <Text lineHeight="1" fontSize="30px">
              Campaigns
            </Text>{" "}
          </Box>
          <Box
            width={[1, 1, 0.32]}
            variant="card"
            flexDirection="column"
            marginBottom="12px"
          >
            <Text fontSize="20px" fontWeight="bolder">
              Online
            </Text>
            <Text marginTop="12px" fontSize="24px" textAlign="center">
              {stats.onlineCampaigns}
            </Text>
          </Box>
          <Box
            width={[1, 1, 0.32]}
            variant="card"
            flexDirection="column"
            marginBottom="12px"
          >
            <Text fontSize="20px" fontWeight="bolder">
              Ready
            </Text>
            <Text marginTop="12px" fontSize="24px" textAlign="center">
              {stats.readyCampaigns}
            </Text>
          </Box>
          <Box
            width={[1, 1, 0.32]}
            variant="card"
            flexDirection="column"
            marginBottom="12px"
          >
            <Text fontSize="20px" fontWeight="bolder">
              Pending Approval
            </Text>
            <Text marginTop="12px" fontSize="24px" textAlign="center">
              {stats.pendingApprovalCampaigns}
            </Text>
          </Box>
        </Box>
​
        <Box
          marginTop="20px"
          justifyContent="space-between"
          flex
          flexWrap="wrap"
        >
          <Box width={[1, 1, 1, 1]} variant="card" marginBottom="12px">
            {" "}
            <Text lineHeight="1" fontSize="30px">
              Users
            </Text>{" "}
          </Box>
          <Box
            width={[1, 1, 0.48]}
            variant="card"
            flexDirection="column"
            marginBottom="12px"
          >
            <Text fontSize="20px" fontWeight="bolder">
              Sellers
            </Text>
            <Text marginTop="12px" fontSize="24px" textAlign="center">
              {stats.sellers}
            </Text>
          </Box>
          <Box
            width={[1, 1, 0.48]}
            variant="card"
            flexDirection="column"
            marginBottom="12px"
          >
            <Text fontSize="20px" fontWeight="bolder">
              Buyers
            </Text>
            <Text marginTop="12px" fontSize="24px" textAlign="center">
              {stats.buyers}
            </Text>
          </Box>
        </Box>
      </Box>
    </Box> //End Parent Box
  );
};
​
export default Dashboard;
