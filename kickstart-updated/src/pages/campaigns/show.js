import React, { Component} from 'react';
import Layout from "../../components/Layout";
import campaign from "../../../ethereum/campaign";
import { Card } from "semantic-ui-react";
import web3 from "../../../ethereum/web3";
class CampaignShow extends Component { 
    static async getInitialProps(props) {
    
        const newcampaign = await campaign(props.query.address);
        const summary = await newcampaign.methods.getSummary().call();
        console.log(summary);
        return {
            minimumContribution: summary[0],
            balance: summary[1],
            requestsCount: summary[2],
            approversCount: summary[3],
            manager: summary[4],
        };
    }
    renderCards() { 
        const { minimumContribution, balance, requestsCount, approversCount, manager } = this.props;
        const items = [
          {
            header: manager,
            meta: 'Address of manager',
            description:
              'The manager created this campaign and can create requests to withdraw money',
            style: { overflowWrap: 'break-word' },
          },
          {
              header: minimumContribution,
              meta: "Minimum Contribution (wei)",
                description:"You must contribute at least this much wei to become an approver",
            }, {
              header: requestsCount,
              meta: "Number of Requests",
                description:"a request tries to withdraw money from the contract. Requests must be approved by approvers",
            }, {
              header: approversCount,
              meta: "Number of Approvers",
                description:"Number of people who have already donated to this campaign",
          },
          {
              header: web3.utils.fromWei(balance,'ether'),
              meta: "Campaign Balance (ether)",
                description:"The balance is how much money this campaign has left to spend",
            }
          
        ];
        return <Card.Group items={items} />;
    }
    render() { 
        return ( 
            <Layout>
                <h1>CampaignShow</h1>
                { this.renderCards() }
          </Layout>
        );
    }
}

export default CampaignShow;
