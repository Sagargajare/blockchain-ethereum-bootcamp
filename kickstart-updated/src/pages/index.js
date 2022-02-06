import React, { Component } from "react";
// import factory from "../ethereum/factory";
import factory from '../../ethereum/factory';
import { Card, Button } from "semantic-ui-react";
import Layout from "../components/Layout";
import {Link} from "../../routes";
class CampaignIndex extends Component {
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();
    return { campaigns };
  }
  renderCampaign() {
    const items = this.props.campaigns.map((address) => {
      return {
        header: address,
        description: (
          <Link route={`/campaigns/${address}`}>
            <a>View Campaign</a>
          </Link>
        ),
        fluid: true,
      };
    });
    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <div>
          <h3>Open Campaigns</h3>
          <Link route="/campaigns/new">
            <a>
              <Button floated="right" content="Create Campaign" primary icon="add" />
            </a>
          </Link>
          {this.renderCampaign()}
        </div>
      </Layout>
    );
  }
}

export default CampaignIndex;
