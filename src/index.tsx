import { FunctionComponent, useEffect } from 'react';

interface ShopifyAnalyticsProviderProps {
    shopId: number;
    sessionId: string;
    userId: string;
    route: string;
}
export const ShopifyAnalyticsProvider: FunctionComponent<ShopifyAnalyticsProviderProps> = ({
    shopId,
    sessionId,
    userId,
    route
}) => {
    useEffect(() => {
        fetch('https://monorail-edge.shopifysvc.com/unstable/produce_batch', {
            method: 'post',
            headers: {
                'content-type': 'text/plain'
            },
            body: JSON.stringify({
                events: [
                    {
                        schema_id: 'trekkie_storefront_page_view/1.4',
                        payload: {
                            appClientId: shopId.toString(),
                            hydrogenSubchannelId: '',
                            url: location.href,
                            path: route,
                            search: location.search,
                            referrer: document.referrer,
                            title: document.title,
                            uniqToken: userId,
                            visitToken: sessionId,
                            microSessionId: route,
                            microSessionCount: 1,

                            shopId: shopId
                        },
                        metadata: {
                            event_created_at_ms: Date.now()
                        }
                    }
                ],
                metadata: {
                    event_sent_at_ms: Date.now()
                }
            })
        });
    }, [route]);
    return null;
};
