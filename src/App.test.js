import React from "react";
import App from "./App";
import { MemoryRouter } from "react-router";
import { mount } from "enzyme";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HomePage from "./Components/Pages/HomePage";
import MoviePage from "./Components/Pages/MoviePage";
import PageNotFound from "./Components/Pages/PageNotFound";
import { cleanup } from "@testing-library/react";

afterEach(cleanup);

describe("Route testing", () => {
	test("invalid path should redirect to 404", () => {
		const wrapper = mount(
			<MemoryRouter initialEntries={["/random"]}>
				<App />
			</MemoryRouter>
		);

		//Find node in the render tree
		expect(wrapper.find(HomePage)).toHaveLength(0);
		expect(wrapper.find(PageNotFound)).toHaveLength(1);
		expect(wrapper.find(Header)).toHaveLength(1);
		expect(wrapper.find(Footer)).toHaveLength(1);
	});

	test("valid path should redirect to home page", () => {
		const wrapper = mount(
			<MemoryRouter initialEntries={["/"]}>
				<App />
			</MemoryRouter>
		);

		//Find node in the render tree
		expect(wrapper.find(HomePage)).toHaveLength(1);
		expect(wrapper.find(PageNotFound)).toHaveLength(0);
		expect(wrapper.find(Header)).toHaveLength(1);
		expect(wrapper.find(Footer)).toHaveLength(1);
	});

	test("valid path should redirect to movie page", () => {
		//Test with a random movie
		const wrapper = mount(
			<MemoryRouter
				initialEntries={[
					{
						pathname:
							"/movie/Star%20Wars:%20Episode%20VII%20-%20The%20Force%20Awakens",
						state: { ID_C: "cw2488496", ID_F: "fw2488496" },
					},
				]}
			>
				<App />
			</MemoryRouter>
		);

		//Find node in the render tree
		expect(wrapper.find(HomePage)).toHaveLength(0);
		expect(wrapper.find(PageNotFound)).toHaveLength(0);
		expect(wrapper.find(Header)).toHaveLength(1);
		expect(wrapper.find(Footer)).toHaveLength(1);
		expect(wrapper.find(MoviePage)).toHaveLength(1);
	});
});
