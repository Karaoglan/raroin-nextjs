import Head from "next/head";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import CardProfile from "../../components/cards/CardProfile";
import CollectionProfile from "../../components/collection/CollectionProfile";
import SidebarProfile from "../../components/sidebars/SidebarProfile";
import HeroProfile from "../../components/hero/HeroProfile";

const Profile = () => {

    return (
        <>
            <Head>
                <title>Profile</title>
            </Head>
            <div>
                <HeroProfile />
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-3 col-md-7 order-md-0 order-1">
                            <SidebarProfile />
                        </div>
                        <div className="col-lg-9 col-md-12 order-md-1 order-0">
                            <div className="profile__content">
                                <div className="d-flex justify-content-between">
                                    <Tabs className="space-x-10">
                                        <div className="d-flex justify-content-between">
                                            <TabList className="d-flex space-x-10 mb-30 nav-tabs">
                                                <Tab className="nav-item">
                                                    <a
                                                        className="btn btn-white btn-sm"
                                                        data-toggle="tab"
                                                        href="#tabs-1"
                                                        role="tab"
                                                    >
                                                        Creations
                                                    </a>
                                                </Tab>
                                                <Tab>
                                                    <a
                                                        className="btn btn-white btn-sm"
                                                        data-toggle="tab"
                                                        href="#tabs-2"
                                                        role="tab"
                                                    >
                                                        Collections
                                                    </a>
                                                </Tab>
                                            </TabList>
                                        </div>
                                        <div className="tab-content">
                                            <TabPanel className="active">
                                                <CardProfile />
                                            </TabPanel>
                                            <TabPanel>
                                                <CollectionProfile />
                                            </TabPanel>
                                        </div>
                                    </Tabs>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;
