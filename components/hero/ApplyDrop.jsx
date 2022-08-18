import { motion } from "framer-motion";

const ApplyDrop = () => {

    return (

            <motion.div
                className="container apply-drop py-40 d-flex justify-content-center align-items-end space-x-30"
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 0.25, opacity: 0.4, opacity: 0.5, opacity: 0.6,
                    opacity: 0.7, opacity: 1
                }}
                transition={{ duration: 1.5 }}
            >

              
                        <h2 className="section__title txt_hero_lg mt-20"> Apply for a drop</h2>
              
                    <button
                        className="btn btn-md btn-primary"
                    >
                        APPLY
                    </button>
            </motion.div>

    );
};

export default ApplyDrop;
