import React from "react";
let Tabs = require("@theme/Tabs").default;

export default function SelfHostedTabs(props) {
    return (
        <Tabs
            groupId="self-hosted"
            defaultValue="with-docker"
            values={[
                { label: 'With Docker', value: 'with-docker' },
                { label: 'Without Docker', value: 'without-docker' },
            ]}>
            {props.children}
        </Tabs>
    );
}