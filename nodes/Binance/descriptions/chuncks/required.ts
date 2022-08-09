import {
	INodeProperties,
} from 'n8n-workflow';

export const requiredFields = [
	// ----------------------------------
	//        All operations
	// ----------------------------------
	{
		displayName: "Symbol", //M
		name: "symbol",
		type: "string",
		default: "",
		displayOptions: {
			show: {
				operation: [
					"newOrder",
					"cancelOrder",
					"cancelAllOrders",
					"queryOrder",
					"cancelOrderSendNew",
					"allOrders",
					"newOco",
					"cancelOCO",
					"accTradeList",
				],
			},
		},
		required: true,
	},
	{
		displayName: "Side", //M
		name: "side",
		type: "options",
		options: [
			{
				name: "SELL",
				value: "SELL",
			},
			{
				name: "BUY",
				value: "BUY",
			},
		],
		displayOptions: {
			show: {
				operation: ["newOrder", "cancelOrderSendNew", "newOco"],
			},
		},
		required: true,
	},
	{
		displayName: "Quantity", //M
		name: "quantity",
		type: "number",
		typeOptions: {
			numberPrecision: 2,
		},
		default: 0.0,
		displayOptions: {
			show: {
				operation: ["newOco"],
			},
		},
		required: true,
	},
	{
		displayName: "Price", //M
		name: "price",
		type: "number",
		typeOptions: {
			numberPrecision: 2,
		},
		default: 0.0,
		displayOptions: {
			show: {
				operation: ["newOco"],
			},
		},
		required: true,
	},
	{
		displayName: "Stop Price", //M
		name: "stopPrice",
		type: "number",
		typeOptions: {
			numberPrecision: 2,
		},
		default: 0.0,
		displayOptions: {
			show: {
				operation: ["newOco"],
			},
		},
		required: true,
	},
	{
		displayName: "Type", //M
		name: "type",
		type: "options",
		options: [
			{
				name: "LIMIT",
				value: "LIMIT",
			},
			{
				name: "MARKET",
				value: "MARKET",
			},
			{
				name: "STOP_LOSS",
				value: "STOP_LOSS",
			},
			{
				name: "STOP_LOSS_LIMIT",
				value: "STOP_LOSS_LIMIT",
			},
			{
				name: "TAKE_PROFIT",
				value: "TAKE_PROFIT",
			},
			{
				name: "TAKE_PROFIT_LIMIT",
				value: "TAKE_PROFIT_LIMIT",
			},
			{
				name: "LIMIT_MAKER",
				value: "LIMIT_MAKER",
			},
		],
		displayOptions: {
			show: {
				operation: ["newOrder", "cancelOrderSendNew"],
			},
		},
		required: true,
	},
	// {
	//     displayName: 'Type', //M
	//     name: 'type',
	//     type: 'string',
	//     default: '',
	//     displayOptions: {
	//         show: {
	//             operation: ['newOrder','cancelOrderSendNew'],
	//         },
	//     },
	//     required: true,
	// },
	{
		displayName: "Cancel Replace Mode", //M
		name: "cancelReplaceMode",
		type: "options",
		options: [
			{
				name: "STOP_ON_FAILURE",
				value: "STOP_ON_FAILURE",
				description:
					"STOP_ON_FAILURE - If the cancel request fails, the new order placement will not be attempted.",
			},
			{
				name: "ALLOW_FAILURES",
				value: "ALLOW_FAILURES",
				description:
					"ALLOW_FAILURES - new order placement will be attempted even if cancel request fails.",
			},
		],
		displayOptions: {
			show: {
				operation: ["cancelOrderSendNew"],
			},
		},
		description: `The allowed values are:
        STOP_ON_FAILURE - If the cancel request fails, the new order placement will not be attempted.
        ALLOW_FAILURES - new order placement will be attempted even if cancel request fails.`,
		required: true,
	},
	{
		displayName: "Timestamp", //M
		name: "timestamp",
		type: "number",
		default: Date.now(),
		displayOptions: {
			show: {
				operation: [
					"newOrder",
					"cancelOrder",
					"cancelAllOrders",
					"queryOrder",
					"cancelOrderSendNew",
					"currentOpenOrders",
					"allOrders",
					"newOco",
					"cancelOCO",
					"queryOco",
					"queryAllOco",
					"queryOpenOco",
					"accInfo",
					"",
					"queryCurrentOrderCount",
					"accTradeList",
				],
			},
		},
		required: true,
	},
	// ----------------------------------
	//        operations BASED ON TYPE
	// ----------------------------------
	{
		displayName: "Time In Force",
		name: "timeInForce",
		type: "string",
		default: "",
		required: true,
		displayOptions: {
			show: {
				operation: ["newOrder"],
				type: ["LIMIT", "STOP_LOSS_LIMIT", "TAKE_PROFIT_LIMIT"],
			},
		},
	},
	{
		displayName: "Quantity",
		name: "quantity",
		type: "number",
		typeOptions: {
			numberPrecision: 2,
		},
		required: true,
		displayOptions: {
			show: {
				operation: ["newOrder"],
				type: [
					"LIMIT",
					"MARKET",
					"STOP_LOSS",
					"STOP_LOSS_LIMIT",
					"TAKE_PROFIT",
					"TAKE_PROFIT_LIMIT",
					"LIMIT_MAKER",
				],
			},
		},
	},
	{
		displayName: "Price",
		name: "price",
		type: "number",
		typeOptions: {
			numberPrecision: 2,
		},
		default: 0.0,
		required: true,
		displayOptions: {
			show: {
				operation: ["newOrder"],
				type: ["LIMIT", "STOP_LOSS_LIMIT", "TAKE_PROFIT_LIMIT", "LIMIT_MAKER"],
			},
		},
	},
	{
		displayName: "Quote Order Qty",
		name: "quoteOrderQty",
		type: "number",
		typeOptions: {
			numberPrecision: 2,
		},
		default: 0.0,
		required: true,
		displayOptions: {
			show: {
				operation: ["newOrder"],
				type: ["MARKET"],
			},
		},
	},
	{
		displayName: "Stop Price",
		name: "stopPrice",
		type: "number",
		typeOptions: {
			numberPrecision: 2,
		},
		description:
			"Used with STOP_LOSS, STOP_LOSS_LIMIT, TAKE_PROFIT, and TAKE_PROFIT_LIMIT orders.",
		default: 0.0,
		required: true,
		displayOptions: {
			show: {
				operation: ["newOrder"],
				type: [
					"STOP_LOSS",
					"STOP_LOSS_LIMIT",
					"TAKE_PROFIT",
					"TAKE_PROFIT_LIMIT",
				],
			},
		},
	},
	{
		displayName: "Trailing Delta",
		name: "trailingDelta",
		type: "number",
		description:
			"Used with STOP_LOSS, STOP_LOSS_LIMIT, TAKE_PROFIT, and TAKE_PROFIT_LIMIT orders. For more details on SPOT implementation on trailing stops, please refer to Trailing Stop FAQ",
		default: 0,
		required: true,
		displayOptions: {
			show: {
				operation: ["newOrder"],
				type: [
					"STOP_LOSS",
					"STOP_LOSS_LIMIT",
					"TAKE_PROFIT",
					"TAKE_PROFIT_LIMIT",
				],
			},
		},
	},
	//=============================================
	//=============================================
	//=============================================
	//=============================================
];